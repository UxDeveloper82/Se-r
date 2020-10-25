using Microsoft.AspNetCore.Mvc;
using MySiteR.Data.FileManager;
using MySiteR.Data.Repository;
using MySiteR.Models.Comments;
using MySiteR.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MySiteR.Controllers
{
    public class PostController : Controller
    {
        private IRepository _repo;
        private readonly IFileManager _fileManager;

        public PostController(IRepository repo, IFileManager fileManager)
        {
            _repo = repo;
            _fileManager = fileManager;


        }
        public IActionResult Index(int pageNumber, string category)
        {
            if (pageNumber < 1)
                return RedirectToAction("Index", new { pageNumber = 1, category });

            var vm = _repo.GetAllPosts(pageNumber, category);
            return View(vm);
        }

        public IActionResult Detail(int id) =>
         View(_repo.GetPost(id));

        [HttpGet("/Image/{image}")]
        [ResponseCache(CacheProfileName = "Monthly")]
        public IActionResult Image(string image)
        {
            var mine = image.Substring(image.LastIndexOf('.') + 1);
            return new FileStreamResult(_fileManager.ImageStream(image), $"image/{mine}");
        }

        [HttpPost]
        public async Task<ActionResult> Comment(CommentViewModel vm)
        {
            if (!ModelState.IsValid)
                return RedirectToAction("Post", new { id = vm.PostId });

            var post = _repo.GetPost(vm.PostId);

            if (vm.MainCommentId == 0)
            {
                post.MainComments = post.MainComments ?? new List<MainComment>();

                post.MainComments.Add(new MainComment
                {
                    Message = vm.Message,
                    Created = DateTime.Now

                });
                _repo.UpdatePost(post);
            }
            else
            {
                var comment = new SubComment
                {
                    MainCommentId = vm.MainCommentId,
                    Message = vm.Message,
                    Created = DateTime.Now,
                };
                _repo.AddSubComment(comment);

            }
            await _repo.SaveChangesAsync();

            return RedirectToAction("Post", new { id = vm.PostId });
        }

    }
}
