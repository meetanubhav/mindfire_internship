using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculate.Logic;

namespace TaxCalculator.UI
{
    class Program
    {
        static void Main(string[] args)
        {
            long salary=0;
            long investement=1;
            while (salary < investement) 
            {
                Console.Clear();
                Console.WriteLine("\t\tWelcome to Tax Calculator App");
                Console.WriteLine("\t----------------------------------------------\n\n");
                Console.Write("Enter Annual Salary Amount \t");
                salary = InputCheck();


                Console.Write("Enter Investment Amount according to 80C \t");
                investement = InputCheck();
            }

            var callLogic = new LogicCalculation();
            callLogic.TaxBusinessLogic(salary,investement);
            Console.ForegroundColor = ConsoleColor.Gray;
            Console.BackgroundColor = ConsoleColor.Red;
            Console.WriteLine("\n\n------------ \t PRESS ANY KEY TO EXIT \t------------");
            Console.ReadKey();
        }

        // Common Function for validation of Input
        public static long InputCheck()
        {
            long userInput = 0;
            Console.ForegroundColor = ConsoleColor.Gray;  
            try
            {
                userInput = Int64.Parse(Console.ReadLine());
                if (userInput < 0)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("No Negative value!!");
                    InputCheck();
                }
            }
            catch
            {
                Console.ForegroundColor = ConsoleColor.Red;  
                Console.WriteLine("Enter Numeric value!!");
                InputCheck();
            }
            return userInput;
        }
    }
}
