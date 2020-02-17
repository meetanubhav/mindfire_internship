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
        public double[] TaxBusinessLogic(long amount, long investement)
        {
            double[] taxes = { 0, 0, 0, 0 };
            double salaryAmount = amount;
            amount = (investement >= 150000) ? amount - 150000 : amount - investement;
            if (amount > 250000)
            {
                if (amount > 250000)
                {
                    taxes[0] = 0;
                    amount -= 250000;
                }
                if (amount > 0)
                {
                    taxes[1] = Math.Round(CalculateTaxSlab(amount,0.05f),2);
                    amount -= 250000;
                }
                if (amount > 0)
                {
                    taxes[2] = Math.Round(CalculateTaxSlab(amount, 0.2f),2);
                    amount -= 500000;
                }
                if (amount > 0)
                {
                       taxes[3] = Math.Round(CalculateTaxSlab(amount, 0.3f),2);
                }
                return taxes;
            }
            else
            {
                return taxes;
            }
        }


        public float CalculateTaxSlab(float amount, float percentValue)
        {
            return (amount * percentValue);
        }
    }
}
