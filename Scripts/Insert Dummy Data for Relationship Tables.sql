INSERT INTO public.hasGPU (gpuID, buildID) VALUES (1, 1);

INSERT INTO public.hasStorage (storageID, buildID) VALUES (1, 1);

INSERT INTO public.hasCooling (coolingID, buildID) VALUES (10, 1);

INSERT INTO public.hasRam (ramID, buildID) VALUES (1, 1);

INSERT INTO public.storageCompatibility (storageID, motherboardID) VALUES (1, 1);

INSERT INTO public.cpuCompatibility (cpuID, motherboardID) VALUES (1, 1);

INSERT INTO public.ramCompatibility (ramID, motherboardID) VALUES (1, 1);

INSERT INTO public.caseCompatibility (caseID, motherboardID) VALUES (1, 1);

INSERT INTO public.PROCESSOR_compatableRAM (compatableRAM, cpuID) VALUES (1, 1);

INSERT INTO public.PC_CASE_frontPanelPorts (frontPanelPorts, caseID) VALUES (1, 1);
