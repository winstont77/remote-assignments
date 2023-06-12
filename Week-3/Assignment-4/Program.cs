var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// CORS setting
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

// CORS setting
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

app.MapGet("/", async context => context.Response.Redirect("/myName"));

app.MapGet("/myName", async context =>
{
    string userName = context.Request.Cookies["userName"];
    if (!string.IsNullOrEmpty(userName))
    {
        await context.Response.WriteAsync($"<html><body><h1>Welcome to {userName}'s page!</h1></body></html>");
    }
    else
    {
        context.Response.Redirect("/trackName");
    }
});

app.MapGet("/trackName", async context =>
{
    await context.Response.WriteAsync(@"<!DOCTYPE html>
        <html>
        <head>
            <title>My Name</title>
        </head>
        <body>
            <form method='post' action='/trackName'>
                <input type='text' name='name' placeholder='Enter your name' required />
                <button type='submit'>Submit</button>
            </form>
            <script>
                document.querySelector('button').addEventListener('click',()=>{
                    //window.location.href = 'http://localhost:3000/myName';
                    console.log('HI')
                })
            </script>
        </body>
        </html>");
});

app.MapPost("/trackName", async context =>
{
    string userName = context.Request.Form["name"];
    context.Response.Cookies.Append("userName", userName);
    context.Response.Redirect("/myName");
});

app.Run("http://localhost:3000");