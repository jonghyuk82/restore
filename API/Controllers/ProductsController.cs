using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Configuration;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;

        }

        // Regular version of endpoint

        // [HttpGet]   // api/products
        // public ActionResult<List<Product>> GetProducts()
        // {
        //     var products = context.Products.ToList();

        //     return Ok(products);
        // }

        // [HttpGet("{id}")] // api/products/3
        // public ActionResult<Product> GetProduct(int id)
        // {
        //     return context.Products.Find(id);
        // }        

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _context.Products.FindAsync(id);
        }
    }
}