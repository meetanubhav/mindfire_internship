using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculator.Interface;
using TaxCalculate;

namespace TaxCalculate.Logic
{
    public class LogicCalculation : ITaxCalculate
    {
        public void TaxBusinessLogic(long amount, long investement)
        {
            double[] taxes = { 0, 0, 0, 0 };
            string[] slabDescription = { "0 to 2,50,000", "2,50,000 to 5,00,000", "5,00,000 to 10,00,000", "10,00,000 and above" };
            int counter = 0;
            amount = (investement >= 150000) ? amount - 150000 : amount - investement;
            if (amount > 250000)
            {
                if (amount > 250000)
                {
                    taxes[0] = 0;
                    amount -= 250000;
                }
                if (amount > 250000)
                {
                    taxes[1] = 12500;
                    amount -= 250000;
                }
                if (amount > 500000)
                {
                    taxes[2] = 100000;
                    amount -= 500000;
                }
                if (amount > 0)
                {
                    taxes[3] = CalculateTaxSlab(amount, 0.3f);
                }
                DisplayTax(taxes, slabDescription);
            }
            else
            {
                Console.BackgroundColor = ConsoleColor.Green;
                Console.ForegroundColor = ConsoleColor.Black;
                Console.WriteLine("You pay no taxes!!");
            }
        }

            

        //Displaying Tax
        public void DisplayTax(double[] taxes,string[] slabDescription)
        {
            int counter = 0;
            foreach(var item in taxes){
                Console.ForegroundColor = ConsoleColor.Gray;  
                Console.Write("Tax for the Slab according to {0} is \t", slabDescription[counter]);
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine(item);
                counter += 1;
            }
            Console.BackgroundColor = ConsoleColor.Yellow;
            Console.ForegroundColor = ConsoleColor.Black;
            Console.WriteLine("\n\nThe total calculated tax based on Old Rengmie is {0}",taxes.Sum());
        }

        public float CalculateTaxSlab(float amount, float percentValue)
        {
            return (amount * percentValue);
        }
    }
}
