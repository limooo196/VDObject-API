//SQL Query
CREATE table VDObject (
  id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
  keyId varchar(20) NOT NULL,
  value varchar(255),
  timeId bigint(13) not null
);

CREATE INDEX VDObject_index_0 ON VDObject (keyId);
CREATE INDEX VDObject_index_1 ON VDObject (timeId);

