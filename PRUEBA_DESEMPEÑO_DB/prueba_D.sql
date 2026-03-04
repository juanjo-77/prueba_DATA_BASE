SET search_path TO juan_jose;

-- 1. Tabla supplier
CREATE TABLE supplier (
    id_supplier SERIAL PRIMARY KEY,
    supplier_name VARCHAR(100),
    supplier_email VARCHAR(100)
);

-- 2. Tabla customer
CREATE TABLE customer (
    id_customer SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    customer_address VARCHAR(255),
    customer_phone VARCHAR(20)
);

-- Creamos la tabla product SIN Primary Key para que acepte nulos
CREATE TABLE product (
    id_product VARCHAR(100), -- Ya no es PRIMARY KEY, ahora acepta nulos o vacíos
    product_name VARCHAR(200),
    unit_price DECIMAL(10,2),
    product_category VARCHAR(150)
);


DROP TABLE IF EXISTS sale CASCADE;

CREATE TABLE sale (
    id_sale SERIAL PRIMARY KEY,
    id_customer TEXT, -- Para que pegues el nombre "Juan Pérez" directo
    product_sku VARCHAR(100), -- Quitamos el REFERENCES para que no pida que el producto exista
    quantity INTEGER,
    total_line_value DECIMAL(10,2),
    purchase_date DATE
);



-- PROCEDIMIENTO DE VINCULACION


CREATE OR REPLACE PROCEDURE juan_jose.vincular_clientes_ventas()
LANGUAGE plpgsql
AS $$
BEGIN
    -- Actualizamos id_customer en sale comparando el texto con el nombre en customer
    
    UPDATE juan_jose.sale s   -- le pone un alias a jua_jose.sale
    SET id_customer = c.id_customer::text  -- reemplaza el id por text
    FROM juan_jose.customer c       --de customers 
    WHERE s.id_customer = c.customer_name;   -- donde s = c
    
    RAISE NOTICE 'Vinculación de clientes completada.';   -- aparece mensaje en el onput
END;
$$;

-- Para usarlo: CALL juan_jose.vincular_clientes_ventas();


-- ===================================================================================

--RESET DE DATOS  esto es para eliminar OJO

CREATE OR REPLACE PROCEDURE juan_jose.limpiar_base_datos()
LANGUAGE plpgsql
AS $$
BEGIN
    TRUNCATE juan_jose.sale, juan_jose.customer, juan_jose.product, juan_jose.supplier RESTART IDENTITY CASCADE;  -- se eliminen tambien los IDs 
    RAISE NOTICE 'Todas las tablas han sido vaciadas y los contadores reiniciados.';
END;
$$;

-- Para usarlo: CALL juan_jose.limpiar_base_datos();


--================================================================================================

-- CALCULAR TOTAL DE VENTAS POR CLIENTE


CREATE OR REPLACE PROCEDURE juan_jose.calcular_total_ventas_producto(sku_param TEXT)
LANGUAGE plpgsql
AS $$
DECLARE
    v_total DECIMAL(10,2);
BEGIN
    SELECT SUM(s.total_line_value) INTO v_total
    FROM juan_jose.sale s
    WHERE s.product_sku = sku_param;

    IF v_total IS NULL THEN
        RAISE NOTICE 'El producto % no tiene ventas registradas.', sku_param;
    ELSE
        RAISE NOTICE 'El total de ventas para el producto % es: $ %', sku_param, v_total;
    END IF;
END;
$$;

CALL juan_jose.calcular_total_ventas_producto('LPT-HP-001');
--====================================================================================================

--Busca el nombre, encuentra su ID y vincula automáticamente todas las ventas.

CALL juan_jose.vincular_clientes_ventas();
SELECT * FROM sale


-- Busca el nombre, suma sus ventas y muestra el total gastado. 





