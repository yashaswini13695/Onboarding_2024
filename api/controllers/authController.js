const authService = require('../services/authService');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userDetails = await authService.login(email, password);
        res.status(200).json({ message: 'Login successful', employee: userDetails.employee, token: userDetails.token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.logout = (req, res) => {
    // Assuming logout is handled client-side by deleting the token
    res.status(200).json({ message: 'Logged out successfully' });
};