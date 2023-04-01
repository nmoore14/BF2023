INSERT INTO `speakers` (`id`, `speaker_first_name`, `speaker_last_name`, `speaker_prefix`) VALUES
(1, 'Jeffrey W.', 'Davis', 'Mr.'),
(2, 'David', 'Hubbard', 'Mr'),
(3, 'Barbara', 'Johnston', 'Ms'),
(4, 'Charles', 'Reed', 'Mr'),
(5, 'Joe', 'Craft', 'Mr');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `speakers`
--
ALTER TABLE `speakers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `speakers`
--
ALTER TABLE `speakers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

