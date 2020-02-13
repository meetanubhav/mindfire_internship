using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

delegate bool FilterArray(int PassVar);

namespace Test
{
    class Program
    {
        public static bool EvenNum(int Element)
        {
            if (Element % 2 == 0)
            {
                return true;
            }
            else{
                return false;
            }
        }
        public static bool CompareNum(int Element)
        {
            if (Element > 10)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public static bool DivisibleNum(int Element)
        {
            if (Element % 5 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        static void Main(string[] args)
        {
            var GetArrayElement = "";
            int[] ArrayOfNums = new int[10];
            int GetNumber;
            Console.WriteLine("Enter 10 numbers");
            for (int count = 0; count < 10; count++)
            {
                Console.ForegroundColor = ConsoleColor.Gray;
                Console.Write("Number {0} --> \t", count + 1);
                GetArrayElement = Console.ReadLine();
                bool parseSuccess = int.TryParse(GetArrayElement, out GetNumber);
                if (parseSuccess)
                {
                    ArrayOfNums[count] = GetNumber;
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("This is not a number! Enter Again");
                    count -= 1;
                }
            }
            Console.Clear();
            DelegateTest DelTestClass = new DelegateTest();
            FilterArray DelEvenNum = new FilterArray(EvenNum);
            FilterArray DelCompareNum = new FilterArray(CompareNum);
            FilterArray DelDivisibleNum = new FilterArray(DivisibleNum);
            bool Value = true;
            while (Value)
            {
                Console.ForegroundColor = ConsoleColor.Gray;
                Console.WriteLine("\nEnter Your Choice \n 1.Return all even numbers.\n 2.Return numbers greater than 10\n 3.Return numbers divisible by 5.\n 4. Break");
                int UserChoice = Int32.Parse(Console.ReadLine());
                switch (UserChoice)
                {
                    case 1:
                        DelTestClass.GetResult(ArrayOfNums,DelEvenNum);
                        break;
                    case 2:
                        DelTestClass.GetResult(ArrayOfNums, DelCompareNum);
                        break;
                    case 3:
                        DelTestClass.GetResult(ArrayOfNums, DelDivisibleNum);
                        break;
                    case 4:
                        Value = false;
                        break;
                    default:
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine("Wrong choice made!");
                        break;
                }    

            }
        }
    }
}