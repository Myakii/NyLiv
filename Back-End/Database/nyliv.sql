-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 04 déc. 2023 à 20:22
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nyliv`
--
-- CREATE DATABASE -- 
CREATE DATABASE IF NOT EXISTS `nyliv` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `nyliv`;
-- --------------------------------------------------------

--
-- Structure de la table `pets`
--

CREATE TABLE `pets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `breed` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `localisation` varchar(255) NOT NULL,
  `urgent` varchar(3) NOT NULL,
  `description` text NOT NULL,
  `img` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `pets`
--

INSERT INTO `pets` (`id`, `name`, `breed`, `age`, `type`, `localisation`, `urgent`, `description`, `img`) VALUES
(1, 'Xixi', 'Yorkshire', 2, 'Chien', 'Saint-Maur-des-Fossés', 'no', '\r\nXixi, une Yorkshire au pelage mêlant le bleu et le brun, porte les cicatrices d\'un abandon passé. Ses yeux sombres reflètent la méfiance héritée, mais aussi une lueur d\'espoir. Malgré son histoire difficile, Xixi recherche l\'affection humaine, offrant une leçon de résilience et d\'amour dans sa quête pour un nouveau foyer.', 0),
(2, 'Fly', 'Berger Allemand', 13, 'Chien', 'Créteil', 'yes', 'Fly berger allemand autrefois compagnon d\'un vétéran de guerre, se retrouve seul dans un refuge. Son regard exprime la loyauté forgée au service de son humain. Dans l\'attente d\'un nouveau foyer, Fly incarne la fidélité indéfectible qui transcende les épreuves du temps.', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
