using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    class DelegateTest
    {
        public void GetResult(int[] ArrayOfNums,  FilterArray UserChoice)
        {
            Console.Clear();
            for (int counter = 0; counter < ArrayOfNums.Length; counter++)
            {
                if (UserChoice(ArrayOfNums[counter]))
                {
                    Console.Write(ArrayOfNums[counter]+"\t");
                }
            }
            
        }
    }
}