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
            var getTax = callLogic.TaxBusinessLogic(salary,investement);
            DisplayTax(getTax);
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

        //Displaying Tax
        public static void DisplayTax(double[] taxes)
        {
            if (taxes.Sum() == 0)
            {
                Console.BackgroundColor = ConsoleColor.Green;
                Console.ForegroundColor = ConsoleColor.Black;
                Console.WriteLine("You pay no taxes!!");
            }
            else
            {
                string[] slabDescription = { "0 to 2,50,000", "2,50,000 to 5,00,000", "5,00,000 to 10,00,000", "10,00,000 and above" };
                int counter = 0;
                foreach (var item in taxes)
                {
                    Console.ForegroundColor = ConsoleColor.Gray;
                    Console.Write("Tax for the Slab according to {0} is \t Rs. ", slabDescription[counter]);
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    Console.WriteLine(item);
                    counter += 1;
                }
                Console.BackgroundColor = ConsoleColor.Yellow;
                Console.ForegroundColor = ConsoleColor.Black;
                Console.WriteLine("\n\nThe total calculated tax based on Old Rengmie is  Rs. {0} ", taxes.Sum());
            }
        }
    }
}
