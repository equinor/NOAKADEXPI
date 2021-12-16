# DEXPI Content Team Call
2021-12-16, 14:05-14:55

## Participants 
- [ ] Beamer, Steve (ELEMENT)
- [ ] Bergmann, Martin (BILFINGER)
- [x] Bierz, Torsten (BASF)
- [ ] Büssow, Richard (Industrial Analytics)
- [ ] Burkett, Brendan (A-Star)
- [ ] Chia, Leonard (A-Star)
- [ ] Ciccarelli, Giada (HEXAGON)
- [ ] Engelhardt, Michael (COVESTRO)
- [ ] Esche, Erik (TU-BERLIN)
- [ ] Filke, Yannick (PTC)
- [x] Ghahraman, Behnam (AUCOTEC)
- [ ] Gomez, Luis (AVEVA)
- [ ] Hamazaki, Geiza (TecGraph-PUK-RIO)
- [ ] Hanke, Leon (AUCOTEC)
- [ ] Ingebrigsten, Idar Pe (EQUINOR)
- [ ] Kersten, Achim (BAYER)
- [ ] Kokkelink, Bernd (SIEMENS)
- [ ] Lofqvist, Kenth (ROBOET)
- [ ] Loh, Gabriel (A-Star)
- [x] Luukkainen, Marko (SEMANTUM)
- [x] Meyer-Rössl, Reiner (AUTODESK)
- [ ] Papakonstantinou, Nikolaos (VTT)
- [x] Pedersen, Tonia (EQUINOR)
- [ ] Persch, Christine (MERCK)
- [ ] Prösch, Marcel (AVEVA)
- [ ] Rathling, Rowen (Rathling Systems)
- [x] Rosenqvist, Liisa (CADMATIC)
- [ ] Safdarnejad, Mostafa (ELEMENT)
- [ ] Schumacher, Felix (SIEMENS)
- [x] Snijder, Paul (HEXAGON) [PS]
- [x] Soemers, Marcus (PNB, AIXCAPE)
- [ ] Sundstrom, Johnny (STORAENSO)
- [x] Temmen, Heiner (formerly EVONIK) [HT]
- [x] Theißen, Manfred (PNB, AIXCAPE) [MT]
- [x] Thos, Jaime (HEXAGON)
- [x] Tolksdorf, Gregor (EVONIK) [GT]
- [ ] Tran, Huu Phuong (BAYER)
- [x] Wagner, Axel (COVESTRO) [AW]
- [ ] Welscher, Wolfgang (X-VISUAL)
- [x] Wiedau, Michael (EVONIK)
- [ ] Ying, Zhou (A-Star)


## Agenda:
1. Review of last meeting minutes of Content Team
2. Next Content Team Meeting in February 2022: 2022-02-03/10 14:00-15:00
3. Discussion of most popular Content Team topics: 
    * Transport of configuration (recap) #13
    * Transport of multiple files #7
4. Any other business
    * New issue in ticket list: self-contained regulator #64 (by PS)
    * Spec 1.3 issue update by MT
    * JIP33/CFIHOS topic by HT

## Notes:
1. Review of last meeting minutes
    * GT gives a summary of the topics of the last meeting.
2. Next Content Team Meeting in 2022
    * Thursday, 2022-02-10, in the afternoon (2:05 pm CET)
    * Thursdays, in the even calendar weeks possible in 2022 for GT and AW
3. Discussion of most popular Content Team topics
    * #13 (transport of PID configuration): Reiner gives an update of the current status of the DEXPI sub project OnePager on 'PID configuration'
    * #7 (transport of multiple files)
    * The discussion has been documented in the respective GitLab issue.
    * One main point: The challenge in transporting multiple PIDs is not packaging it in a container, but defining how to split common information (like a shape catalog or configuration etc.) to reduce redundancy without loosing necessary information connections.
5. Any other business
    * New issue #64 by PS touched in the discussion. Paul will add more information to the issue to highlight the challenges / discussion points.
    * MT gave an update on a new finding in Spec 1.3 #63, where an attribute for custom types was not properly described.
    * HT: JIP33 and CFIHOS (JIP36) are working on grouping of properties similar to components of objects. We should have a look at it, making clear, that not every property grouping is equivalent to a meaningful component (in contrast to property groupings, components can be reused and may have multiplicity greater than one).
