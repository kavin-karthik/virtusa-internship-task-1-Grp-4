import java.util.Scanner;

public class TemperatureConverter 
{
    public static void celsiusToFahrenheit(double celsius) 
    {
        double fahrenheit = (celsius * 9 / 5) + 32;
        System.out.println("Temperature in Fahrenheit: " + fahrenheit);
    }

    public static void fahrenheitToCelsius(double fahrenheit)
    {
        double celsius = (fahrenheit - 32) * 5 / 9;
        System.out.println("Temperature in Celsius: " + celsius);
    }

    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);

        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");
        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();

        if (choice == 1) 
        {
            System.out.print("Enter temperature in Celsius: ");
            double celsius = sc.nextDouble();
            celsiusToFahrenheit(celsius);

        } 
        else if (choice == 2) 
        {
            System.out.print("Enter temperature in Fahrenheit: ");
            double fahrenheit = sc.nextDouble();
            fahrenheitToCelsius(fahrenheit);

        } 
        else 
        {
            System.out.println("Invalid Choice");
        }
    }
}
