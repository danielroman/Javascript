## Virtual Hosting en Apache

Para instalar el apache:
```bash
sudo apt-get install apache2
```

Copiar el sitio en 
```
/var/www/carpeta
```

Hacer al servidor web propietario del sitio:

```bash
sudo chown -R www-data:www-data /var/www/carpeta
```

En /etc/apache2/sites-available/sitio.conf

```
<VirtualHost *:80>
   ServerName misitio.es
  DocumentRoot /var/www/carpeta
</VirtualHost>
```

Para habilitar el sitio:
```bash
sudo a2ensite sitio.conf
```
Para recargar la configuración del apache:
```bash
sudo service apache2 reload
```
Para poder acceder a misitio.es,

editamos como administradores

```bash
sudo gedit /etc/hosts
```

y añadimos

```
127.0.0.1 misitio.es
```

## Base de Datos

Para instalar la base de datos

```bash
sudo apt-get install mysql-server
```

En este proceso nos precunta la contraseña de root (super usuario).

Para entrar en la consola de la base de datos:

```bash
mysql -u root -p
```

nos pregunta la contraseña y nos da acceso.


Creamos la base de datos.

```sql
create database joomladatabase;
```

Y creamos un usuario nuevo y le damos 
privilegios:

```sql
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'my_password';
GRANT ALL PRIVILEGES ON joomladatabase.* TO 'newuser'@'localhost';
```

## Instalar PHP5

Para instalar el intérprete del lenguaje php y que apache lo pueda usar:

```bash
sudo apt-get install php5
sudo apt-get install libapache2-mod-php5
sudo service apache2 restart
```