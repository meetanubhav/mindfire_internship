using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole
{
    public class Calculate
    {
        public int Number1;
        public int Number2;
        public void GetNumber()
        {
            Console.WriteLine("Enter Number 1:");
            Number1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Number 2:");
            Number2 = Convert.ToInt32(Console.ReadLine());
        }
        public void DisplayNumber()
        {
            Console.WriteLine("Number 1 is {0} and Number 2 is {1}", Number1, Number2);
        }
        public int AddNum()
        {
            return Number1 + Number2;
        }
        public int DifferenceNum()
        {
            if (Number1 > Number2)
            {
                return Number1 - Number2;
            }
            else
            {
                return Number2 - Number1;
            }
        }
        public int MultiplyNum()
        {
            return Number1 * Number2;
        }
        public double DivideNum()
        {
            if (Number1 != 0 && Number2 != 0)
            {
                return Number1 / Number2;
            }
            else
            {
                return 0;
            }
        }
    }
}
