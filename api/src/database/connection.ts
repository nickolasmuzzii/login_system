import { connectionSource } from "../ormconfig"

connectionSource.initialize()
.then(() => console.log("😃 - Database successfully connected !!! "))
.catch((err) => console.log(`😭 - Cannot connect to database  reason: ${err}`));
;
