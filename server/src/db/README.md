# Instructions

Login to mysql inside the desired database. Then redirect the output of each file with the `<` command.

```console
mysql -u root <DB_NAME> < <PATH>
```

# Example

```console
mysql -u root ecoa < /Users/ben10pedrin/Documents/school/ecoa/server/src/db/seed-data/schema.sql
```

You have to repeat each command for each `.sql` file you need
