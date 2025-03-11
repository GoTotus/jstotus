
.PHONY: login
login:
	npm login

.PHONY: release
release:
	npm publish --access public
