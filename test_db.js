const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    await prisma.$executeRaw`ALTER TABLE leads DROP CONSTRAINT IF EXISTS leads_status_check;`;
    
    // Add the new check constraint
    await prisma.$executeRaw`
      ALTER TABLE leads 
      ADD CONSTRAINT leads_status_check 
      CHECK (status IN ('New', 'Contacted', 'Viewed', 'Qualified', 'Converted', 'Closed', 'Spam'));
    `;
    console.log("Successfully updated constraint!");
  } catch (e) {
    console.error("Error:", e);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}
main();
