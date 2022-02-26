INSERT INTO public.PSU (psuID, color, efficiencyRating, isModular, watts, brandName, price, imgurl, modelnamepsu) VALUES (1, 'white', '80 Plus Gold', 1, 1200, 'Fake', 1300.00, 1, 'abcde1');

INSERT INTO public.COOLING (coolingtype, hasrgb, size, fanconnectortype, brandname, price, color, modelnamecool, imgurl, numfans) VALUES ('Fan', '0', 12, 'threePin', 'Fun', 1000000.00, 'All of them', 'abcde2', 1, 1);

INSERT INTO public.STORAGE (storageID, price, storageType, formFactor, connectorType, storageAmount, modelnamehdd, imgurl, theoreticalSpeed, brandName) VALUES (1, 120, 'SSD', 'M.2', 'M-Key', 2000, 'abcde3', 1, '3500GB/s', 'Fake');

INSERT INTO public.PROCESSOR (numCores, isMultiThreaded, clockSpeed, socketType, price, modelnamecpu, imgurl ,brandName, cpuID) VALUES (4, 1, 3.4, 'LGA1155', 150.00, 'i7-4770', 1,'Intel', 1);

INSERT INTO public.MOTHERBOARD (motherboardID, formFactor, modelnamemb, imgurl, socketType, numRamSlots, hasHdmi, numUsbPorts, pcieGeneration, price, pcbColor, brandName, numSockets, ramType, hasRGB, numVideoPorts, numSataPorts, numM2Ports) VALUES (1, 'mATX', 'acbde5', 1, 'LGA1155', 4, 1, 6, 'PCIe Gen3', 200.00, 'Green', 'Fake', 1, 'DDR3 1333/1600/1866', 1, 2, 6, 0);

INSERT INTO public.RAM (ramID, brandName, ramType, ramSpeed, price, modelnameram, imgurl, storagePerStick, pcbColor, hasRGB, laptopOrDekstop) VALUES (1, 'Fake', 'DDR3', '1600MHz', 50.00, 'abce6', 1, 4, 'b', 0, 0);

INSERT INTO public.PC_CASE (caseID, hasRGB, supportedMBFormFactor, hasTemperedGlass, hasDustFilters, price, color, modelnamecase, imgurl, numFansIncluded, brandName) VALUES (1, 1, 'mini-ITX, mATX', 1, 1, 150.00, 'Mustard', 'abcde7', 1, 40, 'FAKE');

INSERT INTO public.GPU (gpuID, brandName, vramAmount, modelnamegpu, imgurl, color, hasRGB, gpuLength, gpuHeight, numDisplaysSupported) VALUES (1, 'FAKE', 60, 'RTX Radeon 59675', 1, 'orange', 1, 12, 6, 200);

INSERT INTO public.SAVED_PC_BUILDS (buildID, totalPrice, userID, cpuID, caseID, psuID, motherboardID) VALUES (1, 50000, 1, 1, 1, 1, 1);
