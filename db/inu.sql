-- phpMyAdmin SQL Dump
-- version 4.2.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 08, 2014 at 08:45 PM
-- Server version: 5.5.36-cll-lve
-- PHP Version: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `inu`
--

-- --------------------------------------------------------

--
-- Table structure for table `markers`
--

CREATE TABLE IF NOT EXISTS `markers` (
`id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `address` varchar(80) NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `markers`
--

INSERT INTO `markers` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES
(6, 'Avery Brewing Co', '5763 Arapahoe Ave, Boulder, CO', 40.016338, -105.218712, 'restaurant'),
(5, 'Foothills Off-Leash Dog Park', '4598 7th St, Boulder, CO', 40.058617, -105.289070, 'park'),
(4, 'Valmont Dog Park', '5275 Valmont Rd, Boulder, CO', 40.030624, -105.229546, 'park'),
(7, 'Foothills Community Park', 'Foothills Community Park, Boulder, CO', 40.055660, -105.289070, 'park'),
(8, 'Flatirons Vista and Doudy Draw Trail', '3458 S Foothills Hwy, Boulder, CO', 39.924107, -105.235039, 'trail'),
(9, 'East Boulder Off-Leash Dog Park', '5660 Sioux Dr, Boulder, CO 80303', 39.991486, -105.221909, 'park'),
(10, 'South Boulder Peak and Bear Mountain Trail', '1850 Table Mesa Dr, Boulder, CO 80305', 39.978367, -105.274979, 'trail'),
(11, 'Boulder Reservoir', '5565 N 51st St, Boulder, CO 80301', 40.069893, -105.224014, 'park'),
(12, 'Royal Arch Trail', '13 Chautauqua Park, Boulder, CO, US 80302', 39.995796, -105.281494, 'trail'),
(13, 'Green Mountain Loop Trail', '785 Flagstaff Dr, Boulder, CO', 40.003365, -105.304443, 'trail'),
(14, 'Mesa Trail South End', 'South Boulder Foothills Ditch Boulder, CO', 39.965439, -105.249329, 'trail'),
(15, 'Howard Heuston Off Leash Dog Area', '34th St and Oneal Pkwy Boulder, CO', 40.033409, -105.249092, 'park'),
(16, 'Chautauqua Park', '900 Baseline Rd Boulder, CO', 39.999146, -105.281319, 'park'),
(17, 'Boulder Farmers'' Market', '1900 13th St Boulder, CO', 40.017365, -105.278107, 'store'),
(18, 'University Bicycles', '839 Pearl St, Boulder, CO 80302', 40.017254, -105.284012, 'store'),
(19, 'McGuckin Hardware', '2525 Arapahoe Avenue Boulder, CO', 40.016052, -105.261925, 'restaurant'),
(20, 'Cafe Blue', '5280 Spine Rd, Gunbarrel Shopping Center, Boulder, CO', 40.070251, -105.201668, 'restaurant'),
(21, 'Boulder Beer Brewery', '2880 Wilderness Pl Boulder, CO', 40.026630, -105.248062, 'restaurant'),
(22, 'Rocky Flats Lounge', '11229 Hwy 93 Boulder, CO', 39.900330, -105.241646, 'restaurant'),
(23, 'Walnut Brewery', '1123 Walnut St Boulder, CO', 40.016964, -105.280510, 'restaurant'),
(24, 'Half Fast Subs', '1215 13th St, Boulder, CO', 40.008961, -105.276230, 'restaurant'),
(25, 'Snarf''s', '2128 Pearl St Boulder, CO', 40.020233, -105.267113, 'restaurant'),
(26, 'The Kitchen', '1039 Pearl St Boulder, CO', 40.017799, -105.281731, 'restaurant'),
(27, 'The Cup', '1521 Pearl St Boulder, CO', 40.019093, -105.275398, 'restaurant'),
(28, 'Modmarket', '1600 28th St, Boulder, CO', 40.015781, -105.257851, 'restaurant'),
(29, 'Pekoe Sip House', '2500 30th St. Boulder, CO', 40.026608, -105.253334, 'restaurant'),
(30, 'Dairy Queen', '1212 Nevada Hwy Boulder, CO', 35.972027, -114.849915, 'restaurant'),
(31, 'SALT', '1047 Pearl St. Boulder, CO', 40.017841, -105.281586, 'restaurant'),
(32, 'Upslope Brewery', '1898 S Flatiron Ct, Boulder, CO', 40.019985, -105.218216, 'restaurant'),
(33, 'Walnut Cafe', '3073 Walnut Street Boulder, CO', 40.020737, -105.252663, 'restaurant'),
(34, 'Best Western Plus', '770 28th St, Boulder, CO', 40.001530, -105.257416, 'hotel'),
(35, 'Boulder Outlook Hotel And Suites', '800 28th St, Boulder, CO', 40.002457, -105.257538, 'hotel'),
(36, 'Foot of the Mountain Motel', '200 Arapahoe Ave, Boulder, CO', 40.012280, -105.296188, 'hotel'),
(37, 'Holiday Inn Express', '4777 N Broadway St, Boulder, CO', 40.061180, -105.282928, 'hotel'),
(38, 'Quality Inn & Suites', '2020 Arapahoe Ave, Boulder, CO', 40.014084, -105.268501, 'hotel'),
(39, 'Homewood Suites By Hilton', '4950 W Baseline Rd, Boulder, CO', 39.997208, -105.232666, 'hotel'),
(40, 'Boulder Emergency Pet Clinic', '1658 30th St, Boulder, CO', 40.016449, -105.253357, 'vet'),
(41, 'Firehouse Subs', '1695 29th St, Boulder, CO', 40.019741, -105.256279, 'restaurant'),
(42, 'Old Chicago', '1102 Pearl St, Boulder, CO', 40.017418, -105.280998, 'restaurant'),
(43, 'Twenty Ninth Street Mall', '1710 29th St, Boulder, CO', 40.017063, -105.255737, 'store'),
(44, 'Anthropologie', '1805 29th St #1118 Boulder, CO 80301', 40.018421, -105.256325, 'store'),
(45, 'Boulder Book Store', '1107 Pearl St, Boulder, CO', 40.018009, -105.281143, 'store'),
(46, 'PetSmart', '2982 Iris Ave, Boulder, CO', 40.035557, -105.254967, 'store'),
(47, 'Petco', '2480 Arapahoe Ave, Boulder, CO', 40.013348, -105.261879, 'store'),
(48, 'Urban Outfiters', '934 Pearl St, Boulder, CO', 40.016937, -105.283012, 'store');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
`id` int(10) unsigned NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `body` text,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(10) unsigned NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `markers`
--
ALTER TABLE `markers`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `markers`
--
ALTER TABLE `markers`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
