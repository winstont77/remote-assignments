using Microsoft.Extensions.DependencyInjection;

// Step 1: Define the interface
public interface ICalculator
{
    int Add(int a, int b);
    int Subtract(int a, int b);
}

// Step 2: Implement the interface in two different classes
public class SimpleCalculator : ICalculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    public int Subtract(int a, int b)
    {
        return a - b;
    }
}

public class AdvancedCalculator : ICalculator
{
    public int Add(int a, int b)
    {
        // Implement your advanced addition algorithm here
        int carry;
        while (b != 0)
        {
            carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }
        return a;
    }

    public int Subtract(int a, int b)
    {
        // Implement your advanced subtraction algorithm here
        while (b != 0)
        {
            int borrow = (~a) & b;
            a = a ^ b;
            b = borrow << 1;
        }
        return a;
    }
}

// Step 3: Create the CalculatorController
public class CalculatorController
{
    private readonly ICalculator _calculator;
    private readonly string _calculatorType;

    public CalculatorController(ICalculator calculator, string calculatorType)
    {
        _calculator = calculator;
        _calculatorType = calculatorType;
    }

    public void Calculate(int a, int b)
    {
        Console.WriteLine($"Using {_calculatorType} calculator:");
        Console.WriteLine($"Addition: {_calculator.Add(a, b)}");
        Console.WriteLine($"Subtraction: {_calculator.Subtract(a, b)}");
    }
}

// Step 5: Main method
class Program
{
    static void Main(string[] args)
    {
        // Step 4: Configure DI container and inject dependencies
        var serviceProvider = new ServiceCollection()
            .AddScoped<ICalculator, SimpleCalculator>() // Change to AdvancedCalculator to use the advanced implementation
            .BuildServiceProvider();

        // Create an instance of CalculatorController with the injected dependency
        var calculatorController = new CalculatorController(serviceProvider.GetService<ICalculator>(), "Simple");

        // Call the Calculate method
        calculatorController.Calculate(5, 3);


        // Step 4: Configure DI container and inject dependencies
        var serviceProviderA = new ServiceCollection()
            .AddScoped<ICalculator, AdvancedCalculator>() // Change to AdvancedCalculator to use the advanced implementation
            .BuildServiceProvider();

        // Create an instance of CalculatorController with the injected dependency
        var calculatorControllerA = new CalculatorController(serviceProvider.GetService<ICalculator>(), "Advanced");

        // Call the Calculate method
        calculatorController.Calculate(5, 3);

    }
}
