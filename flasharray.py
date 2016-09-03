import purestorage
import env

class FlashArray(object):
    def __init__(self):
        self.session = purestorage.FlashArray(env.ARRAY_NAME, api_token=env.API_TOKEN)

    def list_volumes(self):
        return self.session.list_volumes()