using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxCalculator.Interface
{
    public interface ITaxCalculate
    {
        float CalculateTaxSlab(float amount, float percentValue);

    }
}
