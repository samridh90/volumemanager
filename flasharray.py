import purestorage
import env

class FlashArray(object):
    def __init__(self):
        self.session = purestorage.FlashArray(env.ARRAY_NAME, api_token=env.API_TOKEN)

    def list_volumes(self):
        return map(transform_size, self.session.list_volumes())

    def rename_volume(self, old, new):
        return self.session.rename_volume(old, new)

    def create_volume(self, name, size):
        return transform_size(self.session.create_volume(name, size))

    def destroy_volume(self, name):
        return self.session.destroy_volume(name);

def transform_size(volume):
    volume["size"] = sizeof_fmt(volume["size"])
    return volume

def sizeof_fmt(num, suffix=''):
    for unit in ['B','K','M','G','T','P','E','Z']:
        if abs(num) < 1024.0:
            return "%g%s%s" % (num, unit, suffix)
        num /= 1024.0
    return "%g%s%s" % (num, 'Y', suffix)