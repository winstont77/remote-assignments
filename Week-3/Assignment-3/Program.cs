var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

//CORS setting
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();

//CORS setting
app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// app.Run();
app.MapGet("/", () => "Hello World!");

app.MapGet("/data", (HttpContext context) =>
{
    string number = context.Request.Query["number"];

    if (string.IsNullOrEmpty(number))
    {
        return "Lack of Parameter";
    }
    else
    {
        if (int.TryParse(number, out int parsedNumber))
        {
            int result = CalculateSum(parsedNumber);
            return $"The result is {result}";
        }
        else
        {
            return "Wrong Parameter";
        }
    }
});

app.MapGet("/test",()=>
{
    return "123";
}
);


app.Run("http://localhost:3000");

bool IsPositiveInteger(int number)
{
    return number > 0;
}

int CalculateSum(int number)
{
    int sum = 0;
    for (int i = 1; i <= number; i++)
    {
        sum += i;
    }
    return sum;
}