CREATE DATABASE `vuelos_guacamaya` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;


CREATE TABLE `acomodaciones` (
  `codigo_acomodaciones` int(11) NOT NULL AUTO_INCREMENT,
  `combinacion` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_acomodaciones`),
  UNIQUE KEY `combinacion_UNIQUE` (`combinacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `aeropuertos` (
  `codigo_iata` char(3) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `pais` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_iata`),
  UNIQUE KEY `codigo_iata_UNIQUE` (`codigo_iata`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `aeropuertos_pistas` (
  `codigo_pista` int(11) NOT NULL,
  `codigo_iata` char(3) NOT NULL,
  `distancia_pista` int(10) unsigned zerofill NOT NULL,
  PRIMARY KEY (`codigo_pista`,`codigo_iata`),
  UNIQUE KEY `codigo_pista_UNIQUE` (`codigo_pista`),
  UNIQUE KEY `codigo_iata_UNIQUE` (`codigo_iata`),
  CONSTRAINT `FK_AERO_PISTA` FOREIGN KEY (`codigo_iata`) REFERENCES `aeropuertos` (`codigo_iata`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `avion` (
  `codigo_avion` int(11) NOT NULL,
  `modelo` varchar(8) NOT NULL,
  `estado_avion` varchar(25) NOT NULL,
  `codigo_ruta` int(11) NOT NULL,
  `tipo_alq_prop` varchar(20) NOT NULL,
  PRIMARY KEY (`codigo_avion`),
  KEY `FK_avion_carac_idx` (`modelo`),
  KEY `FK_avion_ruta_idx` (`codigo_ruta`),
  CONSTRAINT `FK_avion_carac` FOREIGN KEY (`modelo`) REFERENCES `caracteristicas_avion` (`modelo`),
  CONSTRAINT `FK_avion_ruta` FOREIGN KEY (`codigo_ruta`) REFERENCES `ruta` (`codigo_ruta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `boleto` (
  `id_pasajero` int(11) NOT NULL,
  `codigo_vuelo` int(11) NOT NULL,
  `estaso_abordaje` binary(20) NOT NULL,
  `nro_asiento` char(4) NOT NULL,
  PRIMARY KEY (`id_pasajero`),
  KEY `FK_boleto_vuelo_idx` (`codigo_vuelo`),
  CONSTRAINT `FK_boleto_vuelo` FOREIGN KEY (`codigo_vuelo`) REFERENCES `vuelos` (`codigo_vuelo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `caracteristicas_avion` (
  `modelo` varchar(8) NOT NULL,
  `id_fabricante` int(11) NOT NULL,
  `cant_tripulacion` int(11) NOT NULL,
  `tipo_combustible` varchar(10) NOT NULL,
  `cantidad_combustible` decimal(3,0) NOT NULL,
  `cant_banos` int(11) NOT NULL,
  `cant_salidas_emg` int(11) NOT NULL,
  `tipo_equipo_medico` varchar(20) NOT NULL,
  `distancia_despegue` int(11) NOT NULL,
  `codigo_acomodaciones` int(11) NOT NULL,
  `velocidad_max` int(11) NOT NULL,
  `velocidad_crucero` int(11) NOT NULL,
  `cant_asientos_eco` int(11) NOT NULL,
  `cant_asientos_eje` int(11) NOT NULL,
  `peso_vacio` decimal(3,0) NOT NULL,
  `peso_max` decimal(3,0) NOT NULL,
  `carga_max_equipaje` decimal(3,0) NOT NULL,
  `carga_max_cabina` decimal(3,0) NOT NULL,
  PRIMARY KEY (`modelo`),
  UNIQUE KEY `modelo_UNIQUE` (`modelo`),
  KEY `FK_fabricante_avion_idx` (`id_fabricante`),
  KEY `FK_acomodaciones_avion_idx` (`codigo_acomodaciones`),
  CONSTRAINT `FK_acomodaciones_avion` FOREIGN KEY (`codigo_acomodaciones`) REFERENCES `acomodaciones` (`codigo_acomodaciones`),
  CONSTRAINT `FK_fabricante_avion` FOREIGN KEY (`id_fabricante`) REFERENCES `fabricante` (`id_fabricante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `fabricante` (
  `id_fabricante` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_fab` varchar(20) NOT NULL,
  PRIMARY KEY (`id_fabricante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mantenieminto_avion` (
  `id_mantenimiento` int(11) NOT NULL,
  `codigo_avion` int(11) NOT NULL,
  `fecha_ult_mant` date NOT NULL,
  PRIMARY KEY (`id_mantenimiento`,`codigo_avion`),
  KEY `FK_avion_idx` (`codigo_avion`),
  CONSTRAINT `FK_avion` FOREIGN KEY (`codigo_avion`) REFERENCES `avion` (`codigo_avion`),
  CONSTRAINT `FK_mant` FOREIGN KEY (`id_mantenimiento`) REFERENCES `mantenimiento` (`id_mantenimiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `mantenimiento` (
  `id_mantenimiento` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(12) NOT NULL,
  PRIMARY KEY (`id_mantenimiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pasaje` (
  `id_pasajero` int(11) NOT NULL,
  `id_comprador` int(11) NOT NULL,
  `num_escalas` int(11) NOT NULL,
  `precio_pasaje` decimal(6,0) NOT NULL,
  `cant_equipaje` int(11) NOT NULL,
  `clase` binary(10) NOT NULL,
  PRIMARY KEY (`id_pasajero`),
  UNIQUE KEY `id_pasajero_UNIQUE` (`id_pasajero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `personal` (
  `id_personal` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `cargo` varchar(45) NOT NULL,
  PRIMARY KEY (`id_personal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `proveedor_avion` (
  `id_proveedor` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_avion` int(11) NOT NULL,
  `tiempo_resp` time NOT NULL,
  `precio/km` decimal(2,0) NOT NULL,
  PRIMARY KEY (`id_proveedor`),
  UNIQUE KEY `id_proveedor_UNIQUE` (`id_proveedor`),
  KEY `FK_proveedor_avion_idx` (`codigo_avion`),
  CONSTRAINT `FK_proveedor_avion` FOREIGN KEY (`codigo_avion`) REFERENCES `avion` (`codigo_avion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ruta` (
  `codigo_ruta` int(11) NOT NULL,
  `origen_iata` char(3) NOT NULL,
  `destino_iata` char(3) NOT NULL,
  PRIMARY KEY (`codigo_ruta`),
  UNIQUE KEY `codigo_ruta_UNIQUE` (`codigo_ruta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `vuelos` (
  `codigo_vuelo` int(11) NOT NULL AUTO_INCREMENT,
  `estado_vuelo` varchar(45) NOT NULL,
  `codigo_avion` int(11) NOT NULL,
  `precio_base` decimal(10,0) NOT NULL,
  `hora_salida` time NOT NULL,
  `duracion_vuelo` time NOT NULL,
  `sobreventa` binary(45) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`codigo_vuelo`),
  UNIQUE KEY `codigo_vuelo_UNIQUE` (`codigo_vuelo`),
  KEY `FK_vuelo_avion_idx` (`codigo_avion`),
  CONSTRAINT `FK_vuelo_avion` FOREIGN KEY (`codigo_avion`) REFERENCES `avion` (`codigo_avion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
