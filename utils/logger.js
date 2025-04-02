class Logger {
  static step(message) {
    console.log(`\n📋 STEP: ${message}`);
  }

  static info(message) {
    console.log(`ℹ️ INFO: ${message}`);
  }

  static success(message) {
    console.log(`✅ SUCCESS: ${message}`);
  }

  static error(message) {
    console.log(`❌ ERROR: ${message}`);
  }
}

module.exports = Logger;