# -*- coding: utf-8 -*-
from plone import api
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import login
from plone.app.testing import logout
from plone.app.testing import PloneSandboxLayer
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from plone.app.testing import TEST_USER_NAME
from plone.testing import z2

import thomas-volto-project.core


class Thomas-volto-projectcoreLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=thomas-volto-project.core)

    def setUpPloneSite(self, portal):
        setRoles(portal, TEST_USER_ID, ["Manager"])
        login(portal, TEST_USER_NAME)
        api.content.create(type="Document",id="front-page",title="Welcome",container=portal)
        logout()
        applyProfile(portal, "thomas-volto-project.core:default")
        api.portal.set_registry_record("plone.default_language", u"en")


THOMAS-VOLTO-PROJECT_core_FIXTURE = Thomas-volto-projectcoreLayer()


THOMAS-VOLTO-PROJECT_core_INTEGRATION_TESTING = IntegrationTesting(
    bases=(THOMAS-VOLTO-PROJECT_core_FIXTURE,), name="Thomas-volto-projectcoreLayer:IntegrationTesting"
)


THOMAS-VOLTO-PROJECT_core_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(THOMAS-VOLTO-PROJECT_core_FIXTURE, z2.ZSERVER_FIXTURE),
    name="Thomas-volto-projectcoreLayer:FunctionalTesting",
)


THOMAS-VOLTO-PROJECT_core_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        THOMAS-VOLTO-PROJECT_core_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name="Thomas-volto-projectcoreLayer:AcceptanceTesting"
)
