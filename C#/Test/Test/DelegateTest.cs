using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    class DelegateTest
    {
        public int GetResult()
        {
            var GetArrayElement="";
            int[] ArrayOfNums = new int[10];
            int GetNumber;
            Console.WriteLine("Enter 10 numbers");
            for (int count = 0 ; count < 10 ; count++)
            {
                Console.Write("Number {0} --> \t", count + 1);
                GetArrayElement = Console.ReadLine();
                bool parseSuccess = int.TryParse(GetArrayElement, out GetNumber);                
                if (parseSuccess)
                {
                    //Console.WriteLine("Your number is: {0}",GetNumber);
                    ArrayOfNums[count] = GetNumber;
                }
                else{
                    Console.WriteLine("This is not a number! Enter Again");
                    count -= 1;
                }
            }
            Console.Clear();
            //Console.Write("[\t");
            //foreach(int elements in ArrayOfNums){
            //    Console.Write(elements+" ,\t");
            //}
            //Console.Write("]");
                      
            Console.WriteLine("Enter Your Choice \n 1.Return all even numbers.\n 2.Return numbers greater than 10\n 3.Return numbers divisible by 5.\n 4. Break");
            int UserChoice = Int32.Parse(Console.ReadLine());
            switch (UserChoice)
            {
                case 1:
                    foreach (int elements in ArrayOfNums) {
                        if (elements % 2 == 0)
                        {
                            Console.Write(elements+"\t");
                        }
                    }
                    break;
                case 2:
                    foreach (int elements in ArrayOfNums) {
                        if (elements > 10)
                        {
                            Console.Write(elements + "\t");
                        }
                    }
                    break;
                case 3:
                    foreach (int elements in ArrayOfNums) {
                        if (elements % 5 == 0)
                        {
                            Console.Write(elements + "\t");
                        }
                    }
                    break;
                case 4:
                    //Console.WriteLine("divisble by 5");
                    break;
                default:
                    Console.WriteLine("Wrong input");
                    break;
            }    

            return 1;
        }
    }
}
