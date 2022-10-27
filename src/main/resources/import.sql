INSERT INTO clientes(nombre,telefono,direccion) VALUES('Marcos Ezequiel','76906485','San Salvador');
INSERT INTO productos(nombre,descripcion,precio,existencia,marca) VALUES('Computadora','Laptop',8.50,15,'DELL');
INSERT INTO reservas(create_dt,estado,cliente_id) VALUES('2022-07-27','A',1);
INSERT INTO detalle_reservas(id_producto,id_reserva) VALUES(1,1);
INSERT INTO roles(nombre)VALUES('MARCELO');