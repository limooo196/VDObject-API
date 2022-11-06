ASSUMPTIONS:
- (objectController.js) POST method response, i prepared both response (JSON or String message ) ,i returned the response with string message and i commented the json respnse with 201 statuscode.
- timestamp used in this object, i prepared 2 ways to generate value of the time. First one is from javascript date.now() function and Second is mysql now() timestamp function. Here i used the javascript date.now() to get the only the hours and minutes, because in the example you provided its only hours and minutes



//SQL Query
CREATE TABLE object (
  id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
  keyId varchar(20) NOT NULL,
  value varchar(255),
  timeId timestamp DEFAULT (now()) not null
);
CREATE INDEX object_index_0 ON object (keyId);
CREATE INDEX object_index_1 ON object (timeId);

