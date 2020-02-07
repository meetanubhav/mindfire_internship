using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            var CallFunction = new Calculate();
            CallFunction.GetNumber();
            CallFunction.DisplayNumber();
            var Addresult = CallFunction.AddNum();
            var DifferenceResult = CallFunction.DifferenceNum();
            Console.WriteLine("The Addititon of {0} and {1} is {2}", CallFunction.Number1, CallFunction.Number2, Addresult);
            Console.WriteLine("The Difference is {0}", DifferenceResult);
            Console.WriteLine("The Multiplication of {0} and {1} is {2}", CallFunction.Number1, CallFunction.Number2, CallFunction.MultiplyNum());
            Console.WriteLine("The Division of {0} and {1} is {2}", CallFunction.Number1, CallFunction.Number2, CallFunction.DivideNum());
            //int[] marks = { 55, 56, 78, 98, 55, 56, 78, 98 };
            //int la = marks.Length;
            //Console.Write(la);
            Console.ReadLine();
        }
    }
}
