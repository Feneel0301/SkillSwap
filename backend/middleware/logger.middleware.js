let activeLogins = 0;

const loggerMiddleware = (req, res, next) => {
    const start = Date.now();
    const { method, url, ip } = req;

    // Track logins/logouts via URL patterns (could be improved by checking response status)
    res.on("finish", () => {
        const duration = Date.now() - start;
        const { statusCode } = res;

        if (url === "/api/v1/auth/login" && statusCode === 200) {
            activeLogins++;
            console.log(`[AUTH] User Logged In. Total Active Sessions: ${activeLogins}`);
        } else if (url === "/api/v1/auth/logout" && statusCode === 200) {
            activeLogins = Math.max(0, activeLogins - 1);
            console.log(`[AUTH] User Logged Out. Total Active Sessions: ${activeLogins}`);
        }

        console.log(`[${new Date().toISOString()}] ${method} ${url} ${statusCode} - ${duration}ms - IP: ${ip}`);

        if (activeLogins > 100) {
            console.warn(`[ALERT] High concurrent activity: ${activeLogins} active sessions.`);
        }
    });

    next();
};

module.exports = loggerMiddleware;
