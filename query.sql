SELECT a.name
    , b.name as parent_name
FROM parent as a
LEFT JOIN parent as b 
    ON a.parent_id = b.id;