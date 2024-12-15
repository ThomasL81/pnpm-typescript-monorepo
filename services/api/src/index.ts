import { config as dotenv_config } from '@dotenvx/dotenvx'
dotenv_config()

console.log(process.env['DUMMY'] ?? 'not provided' )



