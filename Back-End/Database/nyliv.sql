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
DROP DATABASE IF EXISTS `nyliv`;
CREATE DATABASE IF NOT EXISTS `nyliv` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `nyliv`;
-- --------------------------------------------------------

--
-- Structure de la table `pets`
--
DROP TABLE IF EXISTS `pets`;
CREATE TABLE `pets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `breed` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `type` varchar(255) NOT NULL,
  `localisation` varchar(255) NOT NULL,
  `urgent` varchar(3) NOT NULL,
  `description` text NOT NULL,
  `img` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `pets`
--

INSERT INTO `pets` (`id`, `name`, `breed`, `age`, `genre`, `type`, `localisation`, `urgent`, `description`, `img`) VALUES
(1, 'Xixi', 'Yorkshire', 2, 'Femelle', 'Chien', 'Saint-Maur-des-Fossés', 'Non', 'Xixi, une Yorkshire au pelage mêlant le bleu et le brun, porte les cicatrices d\'un abandon passé. Ses yeux sombres reflètent la méfiance héritée, mais aussi une lueur d\'espoir. Malgré son histoire difficile, Xixi recherche l\'affection humaine, offrant une leçon de résilience et d\'amour dans sa quête pour un nouveau foyer.', 0),
(2, 'Fly', 'Berger Allemand', 13, 'Male', 'Chien', 'Créteil', 'Oui', 'Fly berger allemand autrefois compagnon d\'un vétéran de guerre, se retrouve seul dans un refuge. Son regard exprime la loyauté forgée au service de son humain. Dans l\'attente d\'un nouveau foyer, Fly incarne la fidélité indéfectible qui transcende les épreuves du temps.', 0),
(3, 'Thari', 'Birmanie', 4, "Male", 'Chat', 'Blanc-Mesnil', 'Non', 'Thari, un élégant chat mâle, porte le poids de l\'abandon avec une tristesse discrète dans ses yeux saphir. Abandonné par des mains autrefois aimantes, il erre maintenant avec une grâce solitaire, cherchant un foyer qui saura réchauffer son cœur félin.', 0),
(4, 'Luc', 'Hamster Chinois', 1, 'Male', 'Hamster', 'Saint-Maur-des-Fossés', 'Oui', 'Luc, un petit hamster chinois au pelage doux et aux yeux curieux, a trouvé son chemin jusqu\'à une SPA, laissant derrière lui un mystère sur son passé. Dans sa petite cage, il attend avec espoir qu\'une nouvelle famille découvre son charme unique et lui offre un nouveau départ plein d\'amour.', 0),
(5, 'Grisounette', 'Hamster Sybérie', 2, 'Femelle', 'Hamster', 'Paris', 'Oui', 'Grisounette, un charmant hamster sibérien, cherche un nouveau chez-soi à la SPA, où son doux pelage et sa personnalité espiègle attendent d\'illuminer la vie d\'une famille aimante.', 0);




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
