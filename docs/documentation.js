const swaggerDocumentation = {
    "openapi": "3.1.0",
    "info": {
        "title": "IWACU KERA WEBSITE",
        "description": "This is the API Specification for the iwacu kera website backend server.",
        
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/license/mit"
        },
        "version": "1.0.0"
    },
    "externalDocs": {
        "description": "Get source code",
        "url": "https://github.com/Rosine22/Iwacu-Kera-backend"
    },
    "basePath": "/api/v1",
    "servers": [
        {
            "url": "http://localhost:5000",
            "description": "Local server"
        },
        {
            "url": "https://Iwacu-Kera.onrender.com",
            "description": "culture server"
        }
    ],
    "schemes": ["http", "https"],
    "tags": [
        {
            "name": "Admin",
            "description": "Operations pertaining to past operations"
        }
    ],
    "paths": {
        "/api/v1/admin/register": {
            "post": {
                "tags":["register"],
                "summary": "Test API endpoint",
                "description": "Returns a 'Hello World!' message",
                "responses": {
                    "200": {
                        "description": "Success",
                        "content": {
                            "text/plain": {
                                "schema": {
                                    "type": "string",
                                    "example": "Hello World!"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/v1/admin/login": {
            "post": {
                "tags": ["Admin"],
                "summary": "login to Admin",
                "description": "Creates a new login with the provided details",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Admin"
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Task created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Admin"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request - Validation errors",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
       },
                    "components": {
                        "schemas": {
                          "Admin": {
                            "type": "object",
                            "properties": {
                              "username": {
                                "type": "string",
                                "description": "Unique identifier of an Admin"
                              },
                              "password": {
                                "type": "string",
                                "description": "Name of an Admin",
                                "required": true
                              },
                              "role": {
                                "type": "string",
                                "description": "Description of the Admin"
                              }
                            }
                        }
                    }
                }
            }