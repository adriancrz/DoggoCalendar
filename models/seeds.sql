USE doggo_calendar;

INSERT INTO Parks (name, lat, lon, createdAt, updatedAt)
VALUES
	("Zilker Park", 30.1549, 97.4636, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Hemisfair Park", 29.4198, 98.4866, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
    
INSERT INTO Users (email, password, name, profileImage, createdAt, updatedAt)
VALUES
	("dawso.andrew@gmail.com", "$2a$10$hUin0YPkLkKwpqoyw.rptum5iT.1iZE.qCOMzReeGfkzFOKJ6Uize", "Andrew", "https://s3.amazonaws.com/dogs-day-out/3amNcNZotSaqYay5DXXsZ.jpg", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Dogs (name, gender, bio, weight, energy, patience, dominance, profileImage, UserId, createdAt, updatedAt)
VALUES
	("Chucho", "Male", "Raddest doggo around", 70, 3, 6, 2, "https://s3.amazonaws.com/dogs-day-out/5QKB6V1J1x2mA4emOhwPI.jpg", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);