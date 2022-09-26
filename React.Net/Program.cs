﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using React.Net.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ReactNetContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ReactNetContext") ?? throw new InvalidOperationException("Connection string 'ReactNetContext' not found.")));

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
