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
                    if (salaryAmount > 1000000)
                    {
                        taxes[3] = CalculateTaxSlab(amount, 0.3f);
                    }
                    else
                    {
                        taxes[0] = CalculateTaxSlab(amount, 0.3f);
                    }
                }
                //DisplayTax(taxes);
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
