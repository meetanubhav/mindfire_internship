using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            var TakeInput = new DelegateTest();
            TakeInput.GetResult();
            //Console.WriteLine("Enter Your Choice \n 1.Return all even numbers.\n 2.Return numbers greater than 10\n 3.Return numbers divisible by 5.");
            Console.ReadLine();
        }
    }
}
