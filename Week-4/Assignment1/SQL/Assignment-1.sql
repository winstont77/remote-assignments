CREATE DATABASE assignment;
use assignment;
CREATE TABLE [dbo].[Users] (
    [Id]       UNIQUEIDENTIFIER NOT NULL,
    [Email]    NVARCHAR (MAX)   NOT NULL,
    [Password] NVARCHAR (MAX)   NOT NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([Id] ASC)
);