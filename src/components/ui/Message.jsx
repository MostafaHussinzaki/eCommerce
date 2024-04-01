const Message = function ({ children, type }) {
	return (
		<p className={`message ${type}`}>
			<span>&rarr;</span>
			{children}
		</p>
	);
};

export default Message;
