const reader = require("any-text");

export const getTest = async path => {
	return await reader.getText(path);
};
