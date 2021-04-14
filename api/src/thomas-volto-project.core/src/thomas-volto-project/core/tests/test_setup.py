# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from Products.CMFCore.utils import getToolByName
from thomas-volto-project.core.testing import THOMAS-VOLTO-PROJECT_core_INTEGRATION_TESTING  # noqa
from plone import api

import unittest

try:
    from Products.CMFPlone.utils import get_installer
except ImportError:
    get_installer = None


class TestSetup(unittest.TestCase):
    """Test that thomas-volto-project.core is properly installed."""

    layer = THOMAS-VOLTO-PROJECT_core_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer["portal"]
        if get_installer:
            self.installer = get_installer(self.portal, self.layer["request"])
        else:
            self.installer = api.portal.get_tool("portal_quickinstaller")

    def test_product_installed(self):
        """Test if thomas-volto-project.core is installed."""
        self.assertTrue(self.installer.isProductInstalled("thomas-volto-project.core"))

    # def test_plone_restapi_installed(self):
    #     self.assertTrue(
    #         self.installer.isProductInstalled(
    #             "plone.restapi"
    #         )
    #     )

    def test_browserlayer(self):
        """Test that IThomas-volto-projectcoreLayer is registered."""  # noqa
        from thomas-volto-project.core.interfaces import (IThomas-volto-projectcoreLayer)
        from plone.browserlayer import utils
        self.assertIn(IThomas-volto-projectcoreLayer, utils.registered_layers())  # noqa


class TestUninstall(unittest.TestCase):

    layer = THOMAS-VOLTO-PROJECT_core_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer["portal"]
        if get_installer:
            self.installer = get_installer(self.portal, self.layer["request"])
        else:
            self.installer = api.portal.get_tool("portal_quickinstaller")

        self.installer.uninstallProducts(["thomas-volto-project.core"])  # noqa

    def test_product_uninstalled(self):
        """Test if thomas-volto-project.core is cleanly uninstalled."""  # noqa
        self.assertFalse(self.installer.isProductInstalled(
            "thomas-volto-project.core"))

    def test_browserlayer_removed(self):
        """Test that IThomas-volto-projectcoreLayer is removed."""  # noqa
        from thomas-volto-project.core.interfaces import IThomas-volto-projectcoreLayer  # noqa
        from plone.browserlayer import utils
        self.assertNotIn(IThomas-volto-projectcoreLayer, utils.registered_layers()) # noqa
