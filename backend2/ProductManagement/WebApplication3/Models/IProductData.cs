using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public interface IProductData
    {
        IEnumerable<Product> GetAll();
    }

}
