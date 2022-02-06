INSERT INTO public.USERS (id, isAdmin, phoneNumber, email, password, userName, lastName, firstName) VALUES (1, 0, 777-777-7777, alfred@example.com, alf, guy, alfred);

INSERT INTO public.PSU (psuID, color, efficiencyRating, isModular, watts, brandName, price) VALUES (1, 'white', '80 Plus Gold', 1, 1200, 'Fake', 1300.00);

INSERT INTO public.COOLING (coolingtype, hasrgb, size, fanconnectortype, brandname, price, color, numfans) VALUES ('Fan', '0', 12, 'threePin', 'Fun', 1000000.00, 'All of them', 1);

INSERT INTO public.STORAGE (storageID, price, storageType, formFactor, connectorType, storageAmount, theoreticalSpeed, brandName) VALUES (1, 120, 'SSD', 'M.2', 'M-Key', 2000, '3500GB/s', 'Fake');

INSERT INTO public.PROCESSOR (numCores, isMultiThreaded, clockSpeed, socketType, price, modelName, brandName, cpuID) VALUES (4, 1, 3.4, 'LGA1155', 150.00, 'i7-4770', 'Intel', 1);

INSERT INTO public.MOTHERBOARD (motherboardID, formFactor, socketType, numRamSlots, hasHdmi, numUsbPorts, pcieGeneration, price, pcbColor, brandName, numSockets, ramType, hasRGB, numVideoPorts, numSataPorts, numM2Ports) VALUES (1, 'mATX', 'LGA1155', 4, 1, 6, 'PCIe Gen3', 200.00, 'Green', 'Fake', 1, 'DDR3 1333/1600/1866', 1, 2, 6, 0);

INSERT INTO public.RAM (ramID, brandName, ramTpye, ramSpeed, proce, storagePerStick, pcbColor, hasRGB, laptopOrDesktop) VALUES (1, 'Fake', 'DDR3', '1600MHz', 50.00, 4, 'black', 0, 0);

INSERT INTO public.PC_CASE () VALUES ();

INSERT INTO public.GPU () VALUES ();

INSERT INTO public.SAVED_PC_BUILDS () VALUES ();