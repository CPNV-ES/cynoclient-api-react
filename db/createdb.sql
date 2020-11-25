-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cynoclient
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cynoclient
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cynoclient` DEFAULT CHARACTER SET utf8 ;
USE `cynoclient` ;

-- -----------------------------------------------------
-- Table `cynoclient`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`categories` (
  `id` INT NOT NULL,
  `noun` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cynoclient`.`breeds`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`breeds` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `link` VARCHAR(255) NULL DEFAULT NULL,
  `picture` VARCHAR(255) NULL DEFAULT NULL,
  `noun` VARCHAR(50) NOT NULL,
  `id_category` INT NULL DEFAULT NULL,
  `morphotype` VARCHAR(255) NULL DEFAULT NULL,
  `classification` VARCHAR(255) NULL DEFAULT NULL,
  `min_size_female` INT NULL DEFAULT NULL,
  `max_size_female` INT NULL DEFAULT NULL,
  `min_size_male` INT NULL DEFAULT NULL,
  `max_size_male` INT NULL DEFAULT NULL,
  `min_weight_female` INT NULL DEFAULT NULL,
  `max_weight_female` INT NULL DEFAULT NULL,
  `min_weight_male` INT NULL DEFAULT NULL,
  `max_weight_male` INT NULL DEFAULT NULL,
  `life_expectancy` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_breeds_categories_idx` (`id_category` ASC),
  CONSTRAINT `fk_breeds_categories`
    FOREIGN KEY (`id_category`)
    REFERENCES `cynoclient`.`categories` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cynoclient`.`localities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`localities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `noun` VARCHAR(45) NOT NULL,
  `zip` INT NOT NULL,
  `zip_complement` INT NOT NULL,
  `toponym` VARCHAR(45) NOT NULL,
  `department` VARCHAR(2) NOT NULL,
  `language` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cynoclient`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`clients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `female` TINYINT(1) NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(15) NOT NULL,
  `street` VARCHAR(255) NULL DEFAULT NULL,
  `id_locality` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clients_localities_idx` (`id_locality` ASC),
  CONSTRAINT `fk_clients_localities`
    FOREIGN KEY (`id_locality`)
    REFERENCES `cynoclient`.`localities` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cynoclient`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`services` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `moment` DATE NOT NULL,
  `duration` DECIMAL(2,1) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `street` VARCHAR(255) NULL DEFAULT NULL,
  `id_locality` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_services_localities_idx` (`id_locality` ASC),
  CONSTRAINT `fk_services_localities`
    FOREIGN KEY (`id_locality`)
    REFERENCES `cynoclient`.`localities` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cynoclient`.`dogs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`dogs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `noun` VARCHAR(100) NOT NULL,
  `female` TINYINT(1) NOT NULL,
  `birthdate` DATE NOT NULL,
  `sterilized` TINYINT(1) NOT NULL,
  `chemical` TINYINT(1) NOT NULL,
  `color` VARCHAR(50) NULL DEFAULT NULL,
  `dead` TINYINT(1) NOT NULL,
  `id_client` INT NOT NULL,
  `breed` INT NOT NULL,
  `crossbreed` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dogs_clients_idx` (`id_client` ASC),
  INDEX `fk_dogs_breeds_idx` (`breed` ASC),
  INDEX `fk_dogs_crossbreeds_idx` (`crossbreed` ASC),
  CONSTRAINT `fk_dogs_breeds`
    FOREIGN KEY (`breed`)
    REFERENCES `cynoclient`.`breeds` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_dogs_clients`
    FOREIGN KEY (`id_client`)
    REFERENCES `cynoclient`.`clients` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_dogs_crossbreeds`
    FOREIGN KEY (`crossbreed`)
    REFERENCES `cynoclient`.`breeds` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cynoclient`.`clients_take_services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`clients_take_services` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_client` INT NOT NULL,
  `id_service` INT NOT NULL,
  `dogs_id` INT NOT NULL,
  `paid` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clients_clients_take_services_idx` (`id_client` ASC),
  INDEX `fk_services_clients_take_services_idx` (`id_service` ASC),
  INDEX `fk_clients_take_services_dogs_idx` (`dogs_id` ASC),
  CONSTRAINT `fk_clients_clients_take_services`
    FOREIGN KEY (`id_client`)
    REFERENCES `cynoclient`.`clients` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_services_clients_take_services`
    FOREIGN KEY (`id_service`)
    REFERENCES `cynoclient`.`services` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_clients_take_services_dogs`
    FOREIGN KEY (`dogs_id`)
    REFERENCES `cynoclient`.`dogs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cynoclient`.`consultations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`consultations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `situation` VARCHAR(2000) NOT NULL,
  `goal` VARCHAR(500) NULL DEFAULT NULL,
  `deadline` VARCHAR(250) NULL DEFAULT NULL,
  `solution` VARCHAR(2000) NULL DEFAULT NULL,
  `medicines` VARCHAR(100) NULL DEFAULT NULL,
  `argumentation` VARCHAR(2000) NULL DEFAULT NULL,
  `id_service` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_consultations_services_idx` (`id_service` ASC),
  CONSTRAINT `fk_consultations_services`
    FOREIGN KEY (`id_service`)
    REFERENCES `cynoclient`.`services` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cynoclient`.`diseases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`diseases` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `noun` VARCHAR(45) NOT NULL,
  `description` VARCHAR(2500) NOT NULL,
  `symptoms` VARCHAR(1000) NOT NULL,
  `preventive` VARCHAR(2000) NOT NULL,
  `curative` VARCHAR(2000) NOT NULL,
  `vaccinable` TINYINT(1) NOT NULL,
  `zoonosis` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cynoclient`.`dogs_have_diseases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cynoclient`.`dogs_have_diseases` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_dog` INT NOT NULL,
  `id_disease` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dogs_dogs_have_services_idx` (`id_dog` ASC),
  INDEX `fk_diseases_dogs_have_diseases_idx` (`id_disease` ASC),
  CONSTRAINT `fk_diseases_dogs_have_diseases`
    FOREIGN KEY (`id_disease`)
    REFERENCES `cynoclient`.`diseases` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_dogs_dogs_have_diseases`
    FOREIGN KEY (`id_dog`)
    REFERENCES `cynoclient`.`dogs` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
